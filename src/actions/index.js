import axios from 'axios';
import firebase from 'firebase';

export const FETCH_FORM = 'fetch_form';

const config = {
	apiKey: "AIzaSyCO7JipmYtwi6N-OL59NvxWbQTfGmHNKo8",
	authDomain: "redux-3705f.firebaseapp.com",
	databaseURL: "https://redux-3705f.firebaseio.com",
	storageBucket: "redux-3705f.appspot.com"
};

const PATH = "info/";

firebase.initializeApp(config);

export function saveForm(values){
	firebase.database().ref(PATH).set(values);
}

export function fetchForm(){

	return dispatch => {
		firebase.database().ref(PATH).on('value', snapshot => {
			 dispatch({
				type: FETCH_FORM,
				payload: snapshot.val()
			});
		});
	}

}

