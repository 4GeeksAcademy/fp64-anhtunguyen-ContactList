import { contactDispatcher } from "./contactDispatcher";



const getState = ({ getStore, getActions, setStore }) => {
	
	return {
		store: {
			
			contactList:[]
			
		},
		actions: {
			// Use getActions to call a function within a fuction
			// addContact: (contact) => {
			// 	const store = getStore()
			// 	setStore({...store,contactList:[...store.contactList,contact]})
			// },
			getContacts: async() => {
				const store = getStore()
				const {contacts} = await contactDispatcher.get()
				setStore({...store,contacts})
				console.log(contacts)
				
			},
		
			createContacts: async(contact) => {
				const store = getStore()
				const newContact = await contactDispatcher.post(contact)
				setStore({...store, contactList: [...store.contactList,newContact]})
				console.log(store.contactList)
			},
			deleteContacts: async(id) => {
				await contactDispatcher.delete(id)
			},
			updateContacts: async(id,updatedContacts) => {
				await contactDispatcher.put(id,updatedContacts)
			}

			
		}
	};
};

export default getState;
