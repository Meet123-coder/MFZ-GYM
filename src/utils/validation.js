export const calculateBMI = (height, weight) => {
  if (!height || !weight) {
    return { error: 'Please fill in height and weight' };
  }

  const bmi = Math.round((weight / (height * height)) * 10000) / 100;
  let health = '';

  if (bmi < 18.5) {
    health = 'skinny';
  } else if (bmi < 25) {
    health = 'healthy';
  } else {
    health = 'overweight';
  }

  return { bmi, health, error: null };
};

export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

export const validatePhone = (phone) => {
  const re = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
  return re.test(phone);
};

export const formatWhatsAppNumber = (number) => {
  return number.replace(/\D/g, '');
};
