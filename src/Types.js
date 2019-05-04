export const OPERATIONS = ['addition', 'addition', 'addition'];
export const CHECKING = 'checking';
export const ADDITION = 'addition';
export const RESULT_TYPES = ['truthy', 'falsey'];
export const FETCH_USERS = 'FETCH_USERS';
export const DIFFICULTIES = {
  easy: {
    maxDigits: 2,
    operations: ['addition', 'subtraction'],
    secondsRemaining: 5
  },
  medium: {
    maxDigits: 3,
    operations: ['addition', 'subtraction', 'multiplication', 'division'],
    secondsRemaining: 4
  },
  hard: {
    maxDigits: 4,
    operations: ['addition', 'subtraction', 'multiplication', 'division', 'potentiation'],
    secondsRemaining: 3
  }
}
