function forLoop(array) {
for (let i = 0; i < 25; i++){
if (i === 0) {array[i]="I am a strange loop."}
else {array[i] = "I am ${i} strange loops."}
}
console.log(array)
return array
}
