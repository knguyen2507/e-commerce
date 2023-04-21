import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { GetAllCategories } from '../services/categoryAPI.js';
import { useState, useEffect } from "react";

export default function Footer() {
    const [categories, getCategories] = useState([]);
    
    useEffect(() => {
        const getAllCategories = async () => {
            const categories = await GetAllCategories();
            getCategories(categories);
        }
        getAllCategories();
    }, [])

    return (
        <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
            <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
            </section>

            <section className=''>
                <MDBContainer className='text-center text-md-start mt-5'>
                    <MDBRow className='mt-3'>
                        <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>
                                <MDBIcon color='secondary' icon='gem' className='me-3' />
                                KHOI NGUYEN E-COMMERCE
                            </h6>
                            <p>
                                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit
                                amet, consectetur adipisicing elit.
                            </p>
                        </MDBCol>

                        <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>CATEGORIES</h6>
                            {categories.map(category => (
                                <p><a href={category.id} className='text-reset'>{category.name}</a></p>
                            ))}
                        </MDBCol>

                        <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                            <p><MDBIcon color='secondary' icon='home' className='me-2' />
                                New York, NY 10012, US
                            </p>
                            <p><MDBIcon color='secondary' icon='envelope' className='me-3' />
                                info@example.com
                            </p>
                            <p><MDBIcon color='secondary' icon='phone' className='me-3' />
                                + 01 234 567 88
                            </p>
                            <p><MDBIcon color='secondary' icon='phone' className='me-3' />
                                + 01 234 567 89
                            </p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>

            <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                © 2023 Copyright
            </div>
        </MDBFooter>
    );
}