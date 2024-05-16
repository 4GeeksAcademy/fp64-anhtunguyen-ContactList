import React, { useContext,useEffect,useState } from "react";
// import {CardName} from "../component/card";
import "../../styles/home.css";
import { Context } from "../store/appContext";

export const Home = () => {
	const {store,actions} = useContext(Context);
	
	useEffect (() =>{
		actions.getContacts(); 
		

	}, [])
	



	
	
	return (
	<div className="container">
		{/* <div className="d-grid d-flex justify-content-end">
                <Link to="/"><button className="btn btn-success my-2">Add new contact</button></Link>
            </div> */}
			<ul>

{store.contactList?.map((contact) => 
			 (
				<li key={contact.id} style={{ border: "2px solid black", borderRadius: "5px", padding: "10px", margin: "10px", width: "300px" }}>
					<div>
						<strong style={{ fontSize: "18px" }}>Name:</strong> {contact.name}
					</div>
					<div>
						<strong style={{ fontSize: "18px" }}>Phone:</strong> {contact.phone}
					</div>
					<div>
						<strong style={{ fontSize: "18px" }}>Email:</strong> {contact.email}
					</div>
					<div>
						<strong style={{ fontSize: "18px" }}>Address:</strong> {contact.address}
					</div>
					<div style={{ display: "flex", justifyContent: "center" }}>
						<button className="btn btn-danger mt-2" onClick={()=> {
						actions.deleteContacts(contact.id)
						actions.getContacts()
						}}>Delete</button>
					</div>
					
				</li>
			))}
		</ul>
	</div>
	)
}
	
		

	
	

 