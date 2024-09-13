const Login = () => {
  return (
    <div className=" h-auto w-full mt-32  flex justify-center items-center">
      <section className="mt-10 mb-9 h-auto w-[400px] flex flex-col text-black bg-gray-100 py-14 px-10">
        <h3 className="text-3xl mb-4">ログイン</h3>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">
            メールアドレス
          </label>
          <input type="text" id="email" className="w-full p-2 rounded" />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-2">
            パスワード
          </label>
          <input type="password" id="password" className="w-full p-2 rounded" />
        </div>
        <div className="flex items-center">
          <input type="checkbox" id="rememberMe" className="mr-2" />
          <span>ログイン状態を保持する</span>
        </div>
        <button className="w-full h-14 bg-[#386F81] mt-9 text-white rounded-xl">
        ログイン
        </button>
      </section>
    </div>
  );
};

export default Login;
