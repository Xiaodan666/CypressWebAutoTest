export default class RandomDataUtil{
    randomNum(min, max) { // min最小值，max最大值
        return Math.floor(Math.random() * (max - min)) + min;
    }   
}
