import { configureStore} from "@reduxjs/toolkit";
import userReducer from "./UserSlice";
import movieReducer from "./MovieSlice";
import gptreducer from "./GptSlice";

const appStore = configureStore({
    reducer :{
         user : userReducer,
         movie : movieReducer,
         gpt : gptreducer
    }
});

export default appStore;