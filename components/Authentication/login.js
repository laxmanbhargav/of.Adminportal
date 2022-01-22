import { useState } from 'react';
import { Alert, Spinner, Card } from 'react-bootstrap';
import { LoginWithCredentials } from '../../services/authservice';
import { useForm } from 'react-hook-form';

//react tabs

//auth state
const INITIAL_USER = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
};

const INITIAL_AUTH_STATE = {
    email: '',
    password: '',
};

const AuthModal = () => {
    //context value
    const { register: registerLogin, formState: { errors: loginErrors }, handleSubmit: handleSubmitLogin } = useForm({});

    //auth
    const [user, setUser] = useState(INITIAL_USER);
    const [authUser, setAuthUser] = useState(INITIAL_AUTH_STATE);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [registerResponse, setRegisterResponse] = useState(false);
    const [display, setDisplay] = useState(false);
    const onDismiss = () => setError(false);


    //register handling

    //authentication handling

    const onLoginWithCreds = (data) => {
        setLoading(true);

        LoginWithCredentials(data.email, data.password);
        setLoading(false);


    }


    return (
        <>

            <section className="contact-area pb-100">
                <div className="container">
                    <div className="section-title">
                        <img src="/images/taazalogo.png" />

                    </div>

                    <div className="row">

                        <div className="col-lg-12 col-md-12">
                            <div className="contact-form">
                                <p className="login-text">
                                    Login with your credentials
                                </p>
                                <form id="contactForm" onSubmit={() => e.preventDefault()}>
                                    <div className="row">
                                        <div className="col-lg-12 col-md-6">
                                            <div className="form-group">
                                                <input
                                                    type='text'
                                                    className='form-control'
                                                    placeholder='Email'
                                                    {...registerLogin('email', {
                                                        required: true,
                                                        pattern: {
                                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                                                        }
                                                    })}
                                                />
                                                {loginErrors.email && <span className="text-danger">
                                                    Please enter a valid email.
                                                </span>}
                                            </div>
                                        </div>

                                        <div className="col-lg-12 col-md-6">
                                            <div className="form-group">
                                                <input
                                                    type='password'
                                                    placeholder='Password'
                                                    className='form-control'
                                                    {...registerLogin('password', {
                                                        required: true,
                                                        minLength: {
                                                            value: 8
                                                        }

                                                    })}
                                                />
                                                {loginErrors.password && <span className="text-danger">
                                                    Please enter a password with minimum 8 characters.
                                                </span>}
                                            </div>
                                        </div>

                                        <div className="col-lg-12 col-md-12">
                                            <button
                                                onClick={handleSubmitLogin(onLoginWithCreds)}
                                                type="submit"
                                                className="default-btn"
                                            >
                                                Login Now
                                                {loading ? (
                                                    <Spinner
                                                        color='success'
                                                        className='product-spinner'
                                                        animation='border'
                                                        size='sm'
                                                    />
                                                ) : (
                                                    ''
                                                )}
                                            </button>
                                            <div
                                                id="msgSubmit"
                                                className="h3 text-center hidden"
                                            ></div>
                                            <div className="clearfix"></div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AuthModal;
