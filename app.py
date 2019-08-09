import os
from flask import Flask, render_template, redirect, url_for, abort, request
from flask_restful import Resource, Api
from flask_restful.reqparse import RequestParser
from flask_login import LoginManager
from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField
from wtforms.validators import DataRequired, Email


# Email form
class EmailPasswordForm(FlaskForm):
    email = StringField('Email', validators=[DataRequired(), Email()])
    password = PasswordField('Password', validators=[DataRequired()])


app = Flask(__name__)
# configure login manager
login_manager = LoginManager()
login_manager.init_app(app)
# configure api manager
api = Api(app, prefix='/api/v1')
# configure CSRF
SECRET_KEY = os.urandom(32)
app.config['SECRET_KEY'] = SECRET_KEY

'''
Templates
'''
# Render the homepage
@app.route("/")
def index():
    return render_template('index.html')

# Render the login page
@app.route("/login", methods=['GET', 'POST'])
def login():
    form = EmailPasswordForm()
    if form.validate_on_submit():
        return redirect(url_for('soc'))
    return render_template('login.html', form=form)

# Render the Signup page
@app.route("/signup")
def signup():
    return render_template('signup.html')

# Render the Soc page
@app.route("/soc")
def soc():
    return render_template('soc.html')

# Render the Uni page
@app.route("/uni")
def uni():
    return render_template('uni.html')

# Render the Questionnaire page
@app.route("/questionnaire")
def questionnaire():
    return render_template('questionnaire.html')

# Render the Candidate Analysis page
@app.route("/candidate_analysis")
def candidate_analysis():
    return render_template('candidate_analysis.html')

# Render the match mentor page
@app.route("/match")
def match():
    return render_template('match.html')

# Render the match chat room page
@app.route("/chat")
def chat():
    return render_template('chat.html')

'''
Error handlers
'''
@app.errorhandler(404)
def page_not_found(error):
    return render_template('error.html'), 404


@app.errorhandler(403)
def page_forbidden(error):
    return render_template('error.html'), 403


data_parser = RequestParser()
data_parser.add_argument('user_msg', type=str, required=True, location='json')


class Answer(Resource):
    def post(self):
        try:
            args = data_parser.parse_args()
            user_msg = args['user_msg'].strip()
            return { 'state': True, 'answer': user_msg }, 200
        except Exception as e:
            return {'state': False, 'msg': e}, 204

class Question(Resource):
    def get(self):
        try:
            return { 'state': True, 'question': "question"}, 200
        except Exception as e:
            return {'state': False, 'msg': e}, 204


class AutoQnA(Resource):
    def get(self):
        try:
            return { 'state': True, 'question': "question", 'next_answer': "model_answers"}, 200
        except Exception as e:
            return {'state': False, 'msg': e}, 204


api.add_resource(Answer, '/answer')
api.add_resource(Question, '/question')
api.add_resource(AutoQnA, '/auto')

# Azure Run (Uncomment one of them)
app.run(host=os.getenv('IP', '0.0.0.0'), port=int(os.getenv('PORT', 80)))
# Local Run
#app.run()
