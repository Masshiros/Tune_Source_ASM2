import React, {useEffect, useState} from "react";

const Checkbox = ({genres}) => {
    return genres.map((c,i) => (
        <li className="list-unstyled">
            <input type="checkbox" name="" id="" />
        </li>
    ))
}