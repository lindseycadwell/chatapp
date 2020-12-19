class TestController {
  static async getStuff(req, res) {
    return res.json({
      success: true,
      data: {
        stuff: "the good stuff",
      },
    });
  }
}

export default TestController;
