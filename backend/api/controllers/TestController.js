import logger from '../../config/winston';

class TestController {
  static async getStuff(req, res) {
    logger.info('test info in controller');
    logger.error('test error in controller');
    logger.debug('test debug in controller');

    return res.json({
      success: true,
      data: {
        stuff: 'the good stuff'
      }
    });
  }
}

export default TestController;
