import React from 'react';
import {Link} from 'react-router-dom';

const divStyle = {
    width: '80%',
     height: '300px',
     borderRadius: '21px 21px 0 0',
};

const HomeLayout = () => {
    return (
    <div>
        <header className="bg-dark py-5" style={{marginTop: "-25px"}}>
            <div className="container px-5">
                <div className="row gx-5 justify-content-center">
                    <div className="col-lg-6">
                        <div className="text-center my-5">
                            <h1 className="display-5 fw-bolder text-white mb-2">Welcome to KoA Nexus</h1>
                            <p className="lead text-white-50 mb-4" style={{color:"white"}}>Your King of Avalon resource calculator</p>
                            <p><small style={{color:"white"}}>*We're not affiliated in any way with game developers or game publisher</small></p>
                            <div className="d-grid gap-3 d-sm-flex justify-content-sm-center">
                                <Link to="/register" className="btn btn-outline-light btn-lg px-4">Register<span className="sr-only">(current)</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <section className="py-5 border-bottom" id="features">
            <div className="container px-5 my-5">
                <div className="row gx-5">
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i className="bi bi-collection"></i></div>
                        <h2 className="h4 fw-bolder">Manage your resources</h2>
                        <p>Quickly discover you have way more resources than you thought! Just enter the amount of resources you have, how many resource items you have and we calculate what you can do with it.</p>
                    </div>
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i className="bi bi-building"></i></div>
                        <h2 className="h4 fw-bolder">Add your farms</h2>
                        <p>You can add your farms so you know how much you have on them as well.</p>
                    </div>
                    <div className="col-lg-4">
                        <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i className="bi bi-toggles2"></i></div>
                        <h2 className="h4 fw-bolder">Bonuses included</h2>
                        <p>You can set gear and heroes so we can account for any discounts you might have when building!</p>
                    </div>
                </div>
            </div>
        </section>
        <br/>
        <br/>
        <section id="about">
            <div className="container px-4">
                <div className="row gx-4 justify-content-center">
                    <div className="col-lg-8">
                        <p>We've all been there, wanting to upgrade but don't know exactly how much of each resource we have so we open all our resource items to realize we're still missing a bunch, and then having to shield for some time while we gather whatever we still need.</p>
                        <br/>
                        <h4>Well, not anymore</h4>
                    </div>
                </div>
            </div>
        </section>
    </div>  
    );
};

export default HomeLayout;