import React from 'react'

function Footer() {
    return (
        <div>
            <div className="row">
                <div className="col-md-12">
                    <div className="footer p-3 mt-4 text-center bg-dark text-light">
                        Developed By:
                        <span className="text-warning font-weight-normal">
                            Yoga Ibnudinata
                        </span>
                        <a href="http://ww.omdbapi.com/"
                           target="_blank">
                           OMDB        
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
