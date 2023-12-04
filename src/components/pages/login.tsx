import Button from "../common/button";
import FormWrapper from "../common/form-wrapper";
import TextField from "../common/text-field";
import { useEffect, useRef, useState } from "react";

const Login: React.FC = () => {
  const refSignin = useRef<HTMLFormElement>(null);
  const refInputEmail = useRef<HTMLInputElement>(null);
  const [data, setData] = useState({ email: "", password: "" });
  useEffect(() => {
    if (refInputEmail.current) refInputEmail.current.focus();
  }, []);

  const handleChange = (e: React.FormEvent<HTMLFormElement>) => {
    const { name, value } = e.target as HTMLInputElement;
    setData((p) => ({ ...p, [name]: value }));
  };
  const handleReset = () => {
    setData({ email: "", password: "" });
  };
  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>,
    data: { email: string; password: string },
    ref: React.RefObject<HTMLFormElement>
  ) => {
    e.preventDefault();
    console.log(data);
    if (ref.current) {
      ref.current.reset();
    }
  };

  return (
    <>
      {" "}
      <FormWrapper title={"Форма авторизации"}>
        <form
          ref={refSignin}
          onSubmit={(e) => handleSubmit(e, data, refSignin)}
          onChange={handleChange}
          onReset={handleReset}
        >
          <TextField
            inputRef={refInputEmail}
            type="email"
            name="email"
            placeholder={"Введите почту"}
            autoComplete={"email"}
            label={"Укажите почту"}
            borderRadius={"2px"}
            isRequired={true}
            componentStyle={true}
          />
          <TextField
            type="password"
            name="password"
            autocomplete="current-password"
            placeholder={"Введите пароль"}
            label={"Введите пароль"}
            borderRadius={"2px"}
            isRequired={true}
            componentStyle={true}
          />

          <Button type={"submit"}>Войти</Button>
        </form>
      </FormWrapper>
    </>
  );
};
export default Login;
