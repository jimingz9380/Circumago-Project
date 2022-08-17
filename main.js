
let point = document.getElementById("point");
let submitBtn = document.getElementById("submit-btn");
submitBtn.onclick = addpoint;


function addpoint(){
    let v = 200
    point.innerhtml = `C: ${v}`;
}



// // upload picture js section 
// const database = firebase.database().ref();
// let proofPic = document.getElementById("trash")
// let addPic = document.getElementById("input-pic")


// // import { getStorage, ref } from "firebase/storage";

// // Create a root reference
// const storage = getStorage();

// // Create a reference to 'mountains.jpg'
// const mountainsRef = ref(storage, 'mountains.jpg');

// // Create a reference to 'images/mountains.jpg'
// const mountainImagesRef = ref(storage, 'images/mountains.jpg');

// // While the file names are the same, the references point to different files
// mountainsRef.name === mountainImagesRef.name;           // true
// mountainsRef.fullPath === mountainImagesRef.fullPath;   // false 

// addPic.onclick = updatePic 
// function updatePic {
    
// }








// // download the file with url 
// import { getStorage, ref } from "firebase/storage";

// // Create a reference with an initial file path and name
// const storage = getStorage();
// const pathReference = ref(storage, 'images/stars.jpg');

// // Create a reference from a Google Cloud Storage URI
// const gsReference = ref(storage, 'gs://bucket/images/stars.jpg');

// // Create a reference from an HTTPS URL
// // Note that in the URL, characters are URL escaped!
// const httpsReference = ref(storage, 'https://firebasestorage.googleapis.com/b/bucket/o/images%20stars.jpg');  
















