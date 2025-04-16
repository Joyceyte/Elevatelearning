import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";
import { app } from "./firebaseconfig";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useState } from "react";
function SignUpComponent() {
  let googleProvider = new GoogleAuthProvider();
  let auth = getAuth();
  const [data, setData] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithPopup(auth, googleProvider)
      .then((response) => {
        console.log(response.user);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <Card className="w-96">
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div>
          <div className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Sign up with email
          </div>
          <div className="mb-2 block pt-4">
            <Label htmlFor="email1" value="Your email" />
          </div>
          <TextInput
            id="email1"
            type="email"
            placeholder="name@flowbite.com"
            required
            value={data.email || ""}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Your password" />
          </div>
          <TextInput
            id="password1"
            type="password"
            required
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">Remember me</Label>
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </Card>
  );
}

export default SignUpComponent;
