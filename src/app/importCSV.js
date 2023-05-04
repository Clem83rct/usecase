import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import CSVReader from 'react-csv-reader'
import { collection, addDoc, writeBatch } from "firebase/firestore";
import { db } from "./firebase";

export default function importCSV() {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState([]);
    const batch = writeBatch(db);

    const papaparseOptions = {};

    function iterate_data(sdata, fileInfo, originalFile){}

    async function import_into_firebase(){
        setLoading(true);
        try{
            var docRef = collection(db, "users").doc("alovelace");
            data.map((item, index) => {
                console.log(item);
                addDoc(docRef, item);
            });

            await batch.commit();

            setLoading(false);
            return docRef;

    } catch (error) {
        console.log(error);
        setLoading(true);
        }
    
    }

    return (
        <>
        <h1 className="ml-12 mt-12 text-3xl">
        CSV Importer for Firebase 
        </h1>
        <div className= 'bg-blue-300 ml-12 mt-12 p-12'>
            <CSVReader
                onFileLoaded={iterate_data} 
                parserOptions={papaparseOptions}
            />
        </div>
        <button
        onClick={() => import_into_firebase()}
        className='bg-green-600 rounded-md mI-12 mt-4 p-4 text-white'>
        {loading ? "loading.." : "Import to Firebase"}
        </button>
        <div className=''>
            {}
            <table className='table-auto'>
            {data? data.map((item, index) => (
                <tr key={index}>
                    <td>{item[0]}</td>
                    <td>{item[1]}</td>

                </tr>
            )) : ""}
            </table>
        </div>
        </>
    );

}