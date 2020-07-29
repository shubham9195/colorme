import React from 'react'
import { Input} from 'reactstrap';
export default function ColorMeInput(props) {
    const setSelectedNumber = (e) => {
        e.preventDefault();
        props.setSelectedNumber(e.target.inputNumber.value);
    }
    return (
        <div>
            <form onSubmit={setSelectedNumber}>
                <div className="input-wrap">
                    <Input placeholder="Enter the number" name="inputNumber" type="number" className="col-md-6" />
                </div>
                <div className="button-wrap">
                    <button className="btn btn-success colorBtn" type="submit">Color me</button>
                </div>
            </form>
        </div>
    )
}
