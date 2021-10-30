import React from 'react'
import AndhraBank from './AndhraBank'
import CorporationBank from './CorporationBank'

export default function UnionBank() {
    let data={
        firstName:'usha',
        lastName:'karri'
    }
    return (
        <div>
        <CorporationBank info={data}/>
        <AndhraBank info={data}/>
        <h1>Unionbank</h1>
        
        </div>
    )
}
