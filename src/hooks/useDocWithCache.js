import { useState, useEffect } from 'react';
import { db } from '../firebase';

const cache = {};
const pendingCache = {};

// export default function useDocWithCache(path) {
//   const [doc, setDoc] = useState({});

//   useEffect(() => {
//     let stillMounted = true; // stillMounted used to not update the state on cleanup

//     db.doc(path)
//       .get()
//       .then((doc) => {
//         if (stillMounted) {
//           const data = {
//             ...doc.data(),
//             id: doc.id,
//           };
//           setDoc(data);
//         }
//       });

//     return () => {
//       stillMounted = false;
//     };
//   }, []);
//   return doc;
// }

export default function useDocWithCache(path) {
  const [doc, setDoc] = useState(cache[path]);

  useEffect(() => {
    if (doc) {
      return; // if we have the doc, it means the initial state look up (useState(cache[path])) succeeded and we have the data in our cache. Return away.
    }
    let stillMounted = true; // stillMounted used to not update the state on cleanup

    const promise =
      // NOTE TO SELF: get() used instead of .onSnapshot because we don't need realtime for docs. Get them once and move on with your life.
      pendingCache[path] || (pendingCache[path] = db.doc(path).get()); // if the promise of db.doc().get() is not in pendingCache[path], put it there. (Bit of a hotshot, eh? it's similar to using && to do the next thing.)

    promise.then((doc) => {
      if (stillMounted) {
        const data = {
          ...doc.data(),
          id: doc.id,
        };
        setDoc(data);
        cache[path] = data;
      }
    });

    return () => {
      stillMounted = false;
    };
  }, [path]);
  return doc;
}
