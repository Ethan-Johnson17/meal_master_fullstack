import React from 'react';
import { Row, Col } from 'reactstrap';
import { useUser } from '@auth0/nextjs-auth0/client';
import { AppState } from '../AppState.js';


export default function Profile() {
    const account = AppState.account

    return (
        <>
            {account && (
                <>
                    <div className="container">
                        <div className="row my-5">
                            <div className="col-3">
                                <img
                                    src={account.picture}
                                    alt="Profile"
                                    className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
                                />
                            </div>
                            <div className="col-9">
                                <h2 className='mt-4'>{account.name}</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-8 m-auto bg-dark text-light p-4 rounded">
                                <div><b>ID: </b>   {account.id}</div>
                                <div><b>NAME: </b>   {account.name}</div>
                                <div><b>NICKNAME: </b>   {account.nickname}</div>
                                <div><b>PICTURE: </b>    {account.picture}</div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}
