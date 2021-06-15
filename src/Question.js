import React, {useState} from 'react'

const Question = ({title, info}) => {
    const [hide, setHide] = useState(false);

    function manageOptions()
    {
        setHide(!hide)
    }

    return (
        <div className="card mb-3">
            <div className="card-body">
                <div id="flex-div">
                    <span id="flex-two" className="py-1 font-weight-bold">
                        {title}
                    </span>
                    <span className="font-weight-bold sign" onClick={manageOptions}>
                        {hide ? '-' : '+'}
                    </span>
                </div>
                <p className="my-1">
                    {hide && info}
                </p>
            </div>
        </div>
    )
}

export default Question
