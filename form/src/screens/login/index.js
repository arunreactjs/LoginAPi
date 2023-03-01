import axios from 'axios';
import {Button, Text} from 'react-native';
import {React, useState} from 'react';
import styled from 'styled-components/native';
import {Formik} from 'formik';
import * as Yup from 'yup';



const loginSchema = Yup.object({
  email: Yup.string().email('Please Enter Valid Email').required('Email Address is required'),
  password: Yup.string().min(4, ({min}) => `Password must be at least ${min} characters`).required('Password is required'),
});




   const Login = () => {
  
  const [error, setError] = useState('');

  const handleLogin = async (data) => {
    setError();
    const response = await axios
      .post("http://restapi.adequateshop.com/api/authaccount/login", data)
      .catch((err) => {
        if (err && err.response) 
        setError(err.response.data.message);
      });
    if (response  ) {
      alert("Welcome to Page");
    }
  };
  


  return (
    <Formik
      validationSchema={loginSchema}
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={values => {handleLogin(values)}  }>

      {({handleChange, handleSubmit, values, errors}) => (
        
        <Container>
          <LogoText>Login File</LogoText>

          <Input
            name="email"
            value={values.email}
            onChangeText={handleChange('email') }
            placeholder="Enter Email ID"
          />
          {errors.email && (
            <Text style={{fontSize: 10, color: 'red'}}>{errors.email}</Text>
          )}

          <Input
            placeholder="Enter Password"
            name="password"
            value={values.password}
            onChangeText={handleChange('password')}
          />
          {errors.password && (
            <Text style={{fontSize: 10, color: 'red'}}>{errors.password}</Text>
          )}

          <Button onPress={handleSubmit }  title="login" />
        </Container>
      )}
    </Formik>
  );
};

const Input = styled.TextInput`
border-radius: 20px
color: white
marginBottom: 20px
width: 60%
backgroundColor: grey
height: 50px
`;

const LogoText = styled.Text`
fontSize: 50px
color: yellow
fontWeight: bold
margin-bottom: 20px
`;

const Container = styled.View`
flex: 1
background-color: indigo
align-items : center
justify-content: center
`;

export default Login;