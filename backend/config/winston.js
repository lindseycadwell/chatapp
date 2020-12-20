import winston from 'winston';
import { nodeEnv, logLevel } from './index';

const { combine, colorize, printf, json, prettyPrint } = winston.format;

const myFormat = printf(({ level, message }) => {
  return `\n   Level: ${level} \n   Message: ${message}`;
});

const myCustomLevels = {
  levels: {
    error: 0,
    info: 1,
    debug: 2
  },
  colors: {
    error: 'red',
    info: 'green',
    debug: 'magenta'
  }
};

winston.addColors(myCustomLevels.colors);

let logger;

if (nodeEnv === 'development') {
  logger = winston.createLogger({
    levels: myCustomLevels.levels,
    format: combine(colorize(), myFormat),
    transports: [
      new winston.transports.Console({
        level: logLevel,
        handleExceptions: true
      }),
      new winston.transports.File({ filename: 'combined.log' })
    ],
    exitOnError: false
  });
}
logger.info('test info in winston config file');
logger.error('test error in winston config file');
logger.debug('test debug in winston config file');

export default logger;
