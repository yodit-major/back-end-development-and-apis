function isPrime(num) {
    if (num > 1){
      for(let i =2; i<num-1; i++){
          if(num%i===0){
            return false
          }

      }
      return true
    }else{
        return false
    }
}
export { isPrime };