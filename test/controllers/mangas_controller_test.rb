require 'test_helper'

class MangasControllerTest < ActionDispatch::IntegrationTest
  setup do
    @manga = mangas(:one)
  end

  test "should get index" do
    get mangas_url, as: :json
    assert_response :success
  end

  test "should create manga" do
    assert_difference('Manga.count') do
      post mangas_url, params: { manga: {  } }, as: :json
    end

    assert_response 201
  end

  test "should show manga" do
    get manga_url(@manga), as: :json
    assert_response :success
  end

  test "should update manga" do
    patch manga_url(@manga), params: { manga: {  } }, as: :json
    assert_response 200
  end

  test "should destroy manga" do
    assert_difference('Manga.count', -1) do
      delete manga_url(@manga), as: :json
    end

    assert_response 204
  end
end
