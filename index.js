function createOperation(argumentMarker){
    return (numberOne = 0) => {
        return (numberTwo = 0) => {
            switch(argumentMarker){
                case 'a': return numberOne + numberTwo; break;
                case 's': return numberOne = numberTwo; break;
                case 'm': return numberOne * numberTwo; break;
                case 'd': return numberOne / numberTwo; break;
            }
        }
    }
}