# 设计青年圆桌派资源收集系统

## 本地启动

1. 在Supabase创建项目。
2. 在SQL Editor执行 `supabase/schema.sql`。
3. 在Supabase Auth创建管理员账号，并关闭公开注册。
4. 复制 `.env.example` 为 `.env.local`，填写Supabase地址、密钥和管理员邮箱白名单。
5. 执行 `pnpm dev`。

## 管理员配置

`ADMIN_EMAILS` 支持英文逗号分隔多个管理员邮箱。管理员必须同时存在于Supabase Auth中。

## 数据安全

公开表单通过服务端接口写入，Service Role Key不会发送到浏览器。数据库表已启用RLS，浏览器不直接读取资源数据。
