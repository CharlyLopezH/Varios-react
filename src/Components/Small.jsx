import React from "react";

//Todo el componente entre paréntesis
export const Small = React.memo(({value}) => {
    console.log('Dibujando componente small');
    return(
        <small>{value}</small>
    )
})
export default Small;