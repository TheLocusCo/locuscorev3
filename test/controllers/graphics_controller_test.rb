require 'test_helper'

class GraphicsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @graphic = graphics(:one)
  end

  test "should get index" do
    get graphics_url, as: :json
    assert_response :success
  end

  test "should create graphic" do
    assert_difference('Graphic.count') do
      post graphics_url, params: { graphic: {  } }, as: :json
    end

    assert_response 201
  end

  test "should show graphic" do
    get graphic_url(@graphic), as: :json
    assert_response :success
  end

  test "should update graphic" do
    patch graphic_url(@graphic), params: { graphic: {  } }, as: :json
    assert_response 200
  end

  test "should destroy graphic" do
    assert_difference('Graphic.count', -1) do
      delete graphic_url(@graphic), as: :json
    end

    assert_response 204
  end
end
