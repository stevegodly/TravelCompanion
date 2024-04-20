import {useContext,useState} from "react";
import {UserContext} from '../components/UserContext'
import axios from "axios";
import { useSnackbar } from 'notistack';
import bgi from "../assets/bgi.avif";

const LoginRegister=()=>{

    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const [registerLogin,setRegisterLogin]=useState('login')
    const {setUsername:setLoggedInUsername,setId}=useContext(UserContext)
    const { enqueueSnackbar } = useSnackbar();

    const handleSubmit=async()=>{
        try{
            const user={
                username:username,
                password:password,
            }
            const url = (registerLogin === 'register' ? 'register' : 'login');
            const {data}=await axios.post(`http://localhost:5000/api/v1/users/${url}`,user)
            console.log({data})
            setLoggedInUsername(username);
            setId(data.id);
            enqueueSnackbar(`${url}ed successfully`, { variant: 'success' });
        }
        catch(err){
            enqueueSnackbar('Error: '+err.message, { variant:'error'})
            console.log(err)
        }
    }
    return(
        <div className='flex items-center h-screen bg-contain' style={{ backgroundImage:`url(${bgi})`}}>
            <div className='flex flex-col backdrop-blur-md border-4 border-amber-300 rounded-xl w-[600px] p-4 mx-auto'>
                <div className='my-4'>
                    <label className='text-3xl mr-4 text-blue-600/75 font-serif font-extrabold'>UserName</label>
                    <input
                        type='text'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className='border-2 border-gray-200 px-4 py-2 w-full font-semibold bg-white'
                    />
                </div>
                <div className='my-4'>
                    <label className='text-3xl mr-4 text-blue-600/75 font-serif font-extrabold'>Password</label>
                    <input
                        type='text'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className='border-2 border-gray-200 px-4 py-2 w-full font-semibold bg-white'
                    />
                </div>
                <button className='p-2 bg-amber-400 hover:bg-amber-600 m-8 rounded-md font-semibold text-blue-600 italict-xl' onClick={handleSubmit}>
                    {registerLogin==='login'?'Login':'Register'}
                </button>
                <div className="text-center mt-2">
                    {registerLogin === 'register' && (
                        <div>
                            Already a member?
                            <button className="ml-1 font-semibold" onClick={() => setRegisterLogin('login')}>
                                Login here
                            </button>
                        </div>
                    )}
                    {registerLogin === 'login' && (
                        <div>
                            Dont have an account?
                            <button className="ml-1 font-semibold" onClick={() => setRegisterLogin('register')}>
                                Register
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>     
    )
}

export default LoginRegister;