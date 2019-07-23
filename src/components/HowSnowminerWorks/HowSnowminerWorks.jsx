import React, {Component} from 'react';
import classy from '../../utils/classy';
import style from './HowSnowminerWorks.scss';


export default class HowSnowminerWorks extends Component {
    render() {
        return(
            <div className="HowSnowminerWorks">
                <section className="section section--large section--secondary section__HowSnowminerWorks">
                    <div className="container">
                        <div className="section__header section__header--centered">
                            <div className="section__title">
                                <h2 className="h2">
                                    How SnowMiner Works
                                </h2>
                            </div>
                        </div>


                        <div className="row"> 

                            <div className="col-xs-12 col-sm-4">

                                <div className="icon__number icon__number--blue">1</div>

                                <h3 className="h3">Schedule a snowplow</h3>
                                <p>
                                    Schedule a snowplow in a few easy steps by choosing your property type, services that you need and the time you need it done. Payment is required before job completion.
                                </p>

                            </div>

                            <div className="col-xs-12 col-sm-4">

                                <div className="icon__number icon__number--purple">2</div>

                                <h3 className="h3">Snow removal</h3>
                                <p>
                                    Your driver is now on their way to complete the services needed. You’ll be able to see your driver’s information and vehicle details. 
                                </p>
                            </div>

                            <div className="col-xs-12 col-sm-4">

                                <div className="icon__number icon__number--green">3</div>

                                <h3 className="h3">Leave a review</h3>
                                <p>
                                    If you’re satisfied with the job, help out your driver by rating them and leave a review for us as well. We hope you schedule with us again soon!
                                </p>

                            </div>

                        </div>

                    </div>

                </section>
            </div>
        );
    }
}