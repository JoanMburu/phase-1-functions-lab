// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
    const scuberBlockNumber = 42;
    const distance = Math.abs(scuberBlockNumber - blocks);
    return distance;
}
function distanceFromHqInFeet (blocks) {
    const feetPerBlock = 264;
    const distanceInBlocks = distanceFromHqInBlocks(blocks);
    const distanceInFeet = distanceInBlocks * feetPerBlock;
    return distanceInFeet;
}
function distanceTravelledInFeet(start, end){
    const distanceFromStart = distanceFromHqInFeet (start);
    const distanceFromEnd = distanceFromHqInFeet (end);
    const distanceTravelled = Math.abs(distanceFromStart-distanceFromEnd);
    return distanceTravelled;
}
function calculatesFarePrice (start, end){
    const distInFeet = distanceTravelledInFeet(start,end);
    if (distInFeet >0 && distInFeet<=400){
        return 0;}
    if (distInFeet >400 && distInFeet<=2000){
        return (distInFeet-400)*0.02;}
    if (distInFeet >2000 && distInFeet <2500){
        return 25;}
    return "cannot travel that far";
}
console.log (calculatesFarePrice(43,44));