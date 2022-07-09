const myError = new Error('Invalid Message!!');
myError.name = 'InvalidMessageT';

throw myError;
