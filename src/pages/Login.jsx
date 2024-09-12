const Login = () => {
  return (
    <div className="bg-black h-[600px] w-full ">
      <section className="mt-10 mb-9 h-[600px] w-[800px] flex flex-col bg-black text-white p-4">
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
      </section>
    </div>
  );
};

export default Login;
