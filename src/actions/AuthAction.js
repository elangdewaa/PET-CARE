import FIREBASE from "../config/index";
import { storeData } from "../utils/localStorage";

export const registerUser = async (data, password) => {
    try {
        const success = await FIREBASE.auth().createUserWithEmailAndPassword(data.email, password);

        const dataBaru = {
            ...data,
            uid: success.user.uid,
        };

        await FIREBASE.database()
            .ref("users/" + success.user.uid)
            .set(dataBaru);
        //Local storage(Async Storage)
        storeData("user", dataBaru);
        return dataBaru;
    } catch (error) {
        throw error;
    }
};



export const loginUser = async (email, password) => {
    try {
        const success = await FIREBASE.auth().signInWithEmailAndPassword(email, password);
        const resDB = await FIREBASE.database()
            .ref("/users/" + success.user.uid)
            .once("value");

          
        if (resDB.val()) {
            // Local storage (Async Storage)
            await storeData("user", resDB.val());
            return resDB.val();
        } else {
            throw new Error("User data not found");
        }
    } catch (error) {
        throw error;
    }
};

export const loginAdmin = async (email, password) => {
    try {
        const success = await FIREBASE.auth().signInWithEmailAndPassword(email, password);
        const resDB = await FIREBASE.database()
            .ref("/users/" + success.user.uid)
            .once("value");
        
        const userData = resDB.val();

        console.log(userData)

        if (userData) {
            // Check if user status is "admin"
            if (userData.status === "admin") {
                // If admin, store the user data in AsyncStorage
                await storeData("user", userData);
                return userData;
            } else {
                throw new Error("Access denied: Not an admin user");
            }
        } else {
            throw new Error("User data not found");
        }
    } catch (error) {
        throw error;
    }
};

