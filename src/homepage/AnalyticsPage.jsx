//import { useState } from "react";
//import { app, database } from "../firebaseconfig";
/*import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
} from "firebase/firestore";
*/
//import { Label, TextInput, Button } from "flowbite-react";
//import { Table } from "flowbite-react";
import MakeCallComponent from "../MakeCall";
import ChatBox from "./ChatBox";

function AnalyticsPage() {
  /*
  const [data, setData] = useState({});
  const collectionRef = collection(database, "users");

  const handleSubmit = () => {
    const emailValue = document.getElementById("email").value;
    const passwordValue = document.getElementById("password").value;

    setData({
      email: emailValue,
      password: passwordValue,
    });

    addDoc(collectionRef, {
      email: emailValue,
      password: passwordValue,
    })
      .then(() => {
        alert("data added");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const getData = () => {
    getDocs(collectionRef).then((response) => {
      console.log(
        response.docs.map((item) => {
          return { ...item.data(), id: item.id };
        })
      );
    });
  };

  const updateData = () => {
    const docToUpdate = doc(database, "users", "GwIwN2sR0nMxurosbNUr");
    updateDoc(docToUpdate, {
      email: "ABC",
      password: 12345,
    })
      .then(() => {
        alert("data updated");
      })
      .ctch((err) => {
        alert(err.message);
      });
  }; */

  return (
    <div className="m-4">
      {/*  <div className="flex max-w-md flex-col gap-4 p-8">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email" value="Email" />
          </div>
          <TextInput id="email" type="text" sizing="sm" />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password" value="Password" />
          </div>
          <TextInput id="password" type="password" sizing="md" />
        </div>

        <Button onClick={updateData}> Submit</Button>
      </div>*/}
      <ChatBox />
      <div className="flex justify-center items-center min-h-screen">
        <MakeCallComponent />
      </div>
      {/*      <div className="overflow-x-auto">
        <Table>
          <Table.Head>
            <Table.HeadCell>Date</Table.HeadCell>
            <Table.HeadCell>Color</Table.HeadCell>
            <Table.HeadCell>Category</Table.HeadCell>
            <Table.HeadCell>Price</Table.HeadCell>
            <Table.HeadCell>
              <span className="sr-only">Edit</span>
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {'Apple MacBook Pro 17"'}
              </Table.Cell>
              <Table.Cell>Sliver</Table.Cell>
              <Table.Cell>Laptop</Table.Cell>
              <Table.Cell>$2999</Table.Cell>
              <Table.Cell>
                <a
                  href="#"
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                >
                  Edit
                </a>
              </Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                Microsoft Surface Pro
              </Table.Cell>
              <Table.Cell>White</Table.Cell>
              <Table.Cell>Laptop PC</Table.Cell>
              <Table.Cell>$1999</Table.Cell>
              <Table.Cell>
                <a
                  href="#"
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                >
                  Edit
                </a>
              </Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                Magic Mouse 2
              </Table.Cell>
              <Table.Cell>Black</Table.Cell>
              <Table.Cell>Accessories</Table.Cell>
              <Table.Cell>$99</Table.Cell>
              <Table.Cell>
                <a
                  href="#"
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                >
                  Edit
                </a>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>*/}
    </div>
  );
}

export default AnalyticsPage;
