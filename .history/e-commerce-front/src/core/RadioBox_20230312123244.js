import React, { useEffect, useState, Fragment } from "react";

const RadioBox = ({prices}) => {
    const [value, setValue] = useState()
    return (
        <Fragment>
            {JSON.stringify(prices)}
        </Fragment>
    )
}