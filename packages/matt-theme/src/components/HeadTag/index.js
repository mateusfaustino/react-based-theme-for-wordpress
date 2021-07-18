import React from 'react'
import { Head, connect } from "frontity";

const HeadTag = ({state}) => {
    return(
        <Head>
            <meta name="description" content={state.frontity.description} />
            <html lang="en" />
        </Head>
    )
}
export default connect(HeadTag);