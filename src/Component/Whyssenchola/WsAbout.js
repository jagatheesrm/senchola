import React from 'react'
import {LiaCheckDoubleSolid} from 'react-icons/lia'
import {BsBook} from 'react-icons/bs'

const WsAbout = () => (
    <div className='ws-about container position-relative'>
        <div className='box-lg brown'>

        </div>
        <div className='row'>
            <div className='col-lg-12 ws-university'>
                <h1>Why Senchola <br />
                    University?</h1>
            </div>
            <div className='col-lg-5 ws-university'>
                <p><i className='text text-primary mx-2'><LiaCheckDoubleSolid /></i> what we teach is much more relevant for real
                software careers.</p>
                <p><i className='text text-primary mx-2'><LiaCheckDoubleSolid /></i> At Senchola we look for skillset and abilities
                more than for paper credentials.</p>
                <p><i className='text text-primary mx-2'><LiaCheckDoubleSolid /></i> we do not charge our students any fees.</p>
                <p><i className='text text-primary mx-2'><LiaCheckDoubleSolid /></i> After the successful completion of the internship, you are automatically inducted as an employee into Senchola Technologies Solution.</p>
                <i className='text-success'><BsBook/></i>
            </div>
            <div className='col-lg-1'>
                <hr className='largehr'/>
                <hr className='smallhr'/>
            </div>
            <div className='col-lg-6 ws-university'>
                <i><BsBook/></i>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
                    doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore 
                    veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                    idunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                <i className='mx-5 my-5 text-success'><BsBook/></i>
            </div>
        </div>
    </div>
)

export default WsAbout
