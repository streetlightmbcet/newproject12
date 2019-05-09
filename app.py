from myfolder import app,db
from flask import render_template, redirect, request, url_for, flash,abort
from flask_login import login_user,login_required,logout_user
from myfolder.models import User
from myfolder.forms import LoginForm, RegistrationForm
from werkzeug.security import generate_password_hash, check_password_hash





@app.route('/welcome')
@login_required
def welcome_user():
    return render_template('welcome.html')

@app.route('/logout')
@login_required
def logout():
    logout_user()
    flash('You logged out!')
    return redirect(url_for('login'))


@app.route('/login', methods=['GET', 'POST'])
def login():

    form = LoginForm()
    if form.validate_on_submit():
        # Grab the user from our User Models table
        user = User.query.filter_by(email=form.email.data).first()

        # Check that the user was supplied and the password is right
        # The verify_password method comes from the User object
        # https://stackoverflow.com/questions/2209755/python-operation-vs-is-not

        if user.check_password(form.password.data) and user is not None:
            #Log in the user

            login_user(user)
            flash('Logged in successfully.')

            # If a user was trying to visit a page that requires a login
            # flask saves that URL as 'next'.
            next = request.args.get('next')

            # So let's now check if that next exists, otherwise we'll go to
            # the welcome page.
            if next == None or not next[0]=='/':
                next = url_for('home')

            return redirect(next)
    return render_template('login.html', form=form)
@app.route('/')
def index():
    return render_template('index.html');
@app.route('/home')
@login_required
def home():
    return render_template('home.html')
@app.route('/stlgenergy')
@login_required
def stlgenergy():
    return render_template('energy.html')
@app.route('/brokenlamp')
@login_required
def brokenlamp():
    return render_template('broken-lamp.html')
@app.route('/battery')
@login_required
def battery():
    return render_template('battery.html')
@app.route('/generation')
@login_required
def generation():
    return render_template('generation.html')

@app.route('/compare')
@login_required
def compare():
    return render_template('compare.html')

@app.route('/team')
@login_required
def team():
    return render_template('team.html')

@app.route('/gallery')
@login_required
def gallery():
    return render_template('gallery.html')

@app.route('/register', methods=['GET', 'POST'])
def register():
    form = RegistrationForm()

    if form.validate_on_submit():
        user = User(email=form.email.data,
                    username=form.username.data,
                    password=form.password.data)

        db.session.add(user)
        db.session.commit()
        flash('Thanks for registering! Now you can login!')
        return redirect(url_for('login'))
    return render_template('register.html', form=form)

if __name__ == '__main__':
    app.run(debug=False)
