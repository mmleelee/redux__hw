import React from "react";
import { NativeBaseProvider, Center, HStack, Button, Text } from "native-base";
import { useDispatch, useSelector } from "react-redux";
import { increaseOne, decreaseOne ,selectCounter } from "../redux/counterSlice";

const Screen = () => {
   // Get states from store
   const counterValue = useSelector(selectCounter);
 
   // Define a dispatch to send actions
   const dispatch = useDispatch();
 
   return (
     <NativeBaseProvider>
       <Center flex={1}>
         <HStack space={20}>
           <Button borderRadius={0} width={70} 
             onPress={() => dispatch(increaseOne(counterValue+1))}
           >
             <Text fontSize={40} color={"white"}>+</Text>
           </Button>
           <Button borderRadius={0} width={70} 
             onPress={() => dispatch(decreaseOne(counterValue-1))}
           >
             <Text fontSize={40} color={"white"}>-</Text>
           </Button>
         </HStack>
         <Text fontSize={40} mt={20} >
           {counterValue}
         </Text>
       </Center>
     </NativeBaseProvider>
   );
 }

 export default Screen;