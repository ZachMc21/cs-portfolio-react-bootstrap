import { render } from '@testing-library/react';
import React from 'react';
import '../scss/pageHeader.scss';

export default function PageHeader() {
    return (
        <div className="pageHeader">
            <h1>Zach Magloughlin</h1>
            <a href='magloughlin.zach@gmail.com'>magloughlin.zach@gmail.com</a>
            <p>(For phone number, see resume.)</p>
        </div>
    );
}