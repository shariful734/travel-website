import React from 'react';
import './AddCountry.css';
import { useForm } from "react-hook-form";
import axios from 'axios';

const AddCountry = () => {

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);

        axios.post('https://nameless-thicket-79075.herokuapp.com/countries', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added a data successfully');
                    reset();
                }
            })
    }

    return (
        <div className="add-country vh-100">

            <h1 className="text-primary text-center m-3">Please Add A Country</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="country name" />
                <textarea  {...register("description",)} placeholder="description" />
                <input {...register("img",)} placeholder="img URL" />

                <button className="bg-success" type="submit" >add country Now</button>
            </form>

        </div >




    );
};

export default AddCountry;