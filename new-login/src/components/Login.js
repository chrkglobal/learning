import React from 'react';

function Login() {
    return (

        <>
            <div className="container-fluid vh-100 bg-image padding-0">
                <div className='login-bg-overlay'>
                <div className="row vh-100 ">
                    
                    <div className="col-8 opacity-2 container vh-100 d-flex justify-content-center align-items-center text-white">
                        <p>Lorem ipsum...</p>
                    </div>
                    <div className="col-4">
                        <div className='col-24 vh-100 d-flex justify-content-center align-items-center'>
                            <div className="col-10 card text-start p-20 align-middle">
                                <div className="card-header">Login</div>
                                <div style={{ padding: '20px' }}>
                                    <form action="">
                                        <div class="mb-3 mt-3">
                                            <label for="email" class="form-label">Email:</label>
                                            <input type="email" class="form-control" id="email" placeholder="Enter email" name="email" />
                                        </div>
                                        <div class="mb-3">
                                            <label for="pwd" class="form-label">Password:</label>
                                            <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pswd" />
                                        </div>
                                        <div class="form-check mb-3">
                                            <label class="form-check-label">
                                                <input class="form-check-input" type="checkbox" name="remember" /> Remember me
                                            </label>
                                        </div>
                                        <button type="submit" class="btn btn-primary">Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;