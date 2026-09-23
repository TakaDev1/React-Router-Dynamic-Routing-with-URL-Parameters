# React Router Dynamic Routing with URL Parameters

React Routerの**URLパラメータを使用したDynamic Routing（動的ルーティング）**を学習するための練習アプリです。

`/user/:id` のルートを設定し、URLに含まれるユーザーIDを`useParams()`で取得して、該当するユーザー情報を表示します。

---

## 目次

1. [概要](#概要)
2. [学習内容](#学習内容)
3. [使用技術](#使用技術)
4. [アプリケーションの動作](#アプリケーションの動作)
5. [URLパラメータ](#urlパラメータ)
6. [ディレクトリ構成](#ディレクトリ構成)
7. [実装内容](#実装内容)
8. [起動方法](#起動方法)
9. [確認方法](#確認方法)

---

## 概要

このアプリでは、React RouterのURLパラメータを使用して、URLごとに異なるユーザー情報を表示します。

例えば、

```text
/user/1
```

にアクセスすると、`id`に`1`が入り、ユーザーID `1` の情報を表示します。

```text
/user/2
```

にアクセスすると、`id`に`2`が入り、ユーザーID `2` の情報を表示します。

---

## 学習内容

このアプリでは、以下の内容を学習します。

* Dynamic Routing
* URLパラメータ
* `:id`による動的なルート設定
* `useParams()`によるURLパラメータの取得
* URLパラメータを利用したデータ検索
* コンポーネント・データ・型の分離
* `Link`によるページ遷移

---

## 使用技術

* React
* TypeScript
* React Router
* Tailwind CSS

---

## アプリケーションの動作

### ユーザー一覧へのリンク

画面上には以下のリンクを表示します。

```text
User 1
User 2
```

それぞれクリックすると、以下のURLへ移動します。

```text
User 1 → /user/1
User 2 → /user/2
```

### ユーザー情報の表示

`/user/:id`にアクセスすると、URLの`id`に対応するユーザー情報を表示します。

```text
/user/1

User Profile

Name: Alice
Email: alice@example.com
```

```text
/user/2

User Profile

Name: Bob
Email: bob@example.com
```

### 存在しないユーザー

登録されていないIDにアクセスした場合は、

```text
/user/999
```

以下のメッセージを表示します。

```text
User not found
```

---

## URLパラメータ

ルートでは、以下のように`:id`を指定します。

```tsx
<Route path="/user/:id" element={<UserProfile />} />
```

`:id`の部分がURLパラメータです。

例えば、

```text
/user/1
```

の場合、

```text
id = "1"
```

となります。

`UserProfile.tsx`では、`useParams()`を使用して取得します。

```tsx
const { id } = useParams<"id">();
```

取得した`id`を使用して、ユーザーデータから該当するユーザーを検索します。

```tsx
const user = id ? users[id] : undefined;
```

---

## ディレクトリ構成

```text
src/
├── components/
│   └── Navigation.tsx
├── pages/
│   └── UserProfile.tsx
├── data/
│   └── users.ts
├── types/
│   └── user.ts
└── App.tsx
```

### `components/`

```text
Navigation.tsx
```

ユーザー詳細ページへ移動するための`Link`を管理します。

### `pages/`

```text
UserProfile.tsx
```

URLパラメータからユーザーIDを取得し、ユーザー情報を表示します。

### `data/`

```text
users.ts
```

学習用のユーザーデータを管理します。

```ts
export const users = {
  "1": {
    name: "Alice",
    email: "alice@example.com",
  },
  "2": {
    name: "Bob",
    email: "bob@example.com",
  },
};
```

### `types/`

```text
user.ts
```

ユーザーデータで使用する`User`型を管理します。

### `App.tsx`

React Routerのルーティングを管理します。

```tsx
<Routes>
  <Route path="/user/:id" element={<UserProfile />} />
</Routes>
```

---

## 実装内容

### 1. 動的ルートを定義

```tsx
<Route path="/user/:id" element={<UserProfile />} />
```

`/:id`によって、URLから動的にユーザーIDを受け取ります。

### 2. URLパラメータを取得

```tsx
const { id } = useParams<"id">();
```

例えば、

```text
/user/1
```

にアクセスした場合、

```ts
id === "1"
```

となります。

### 3. ユーザーデータを検索

```tsx
const user = id ? users[id] : undefined;
```

取得した`id`を利用して、`users`から該当するユーザーを取得します。

### 4. ユーザー情報を表示

ユーザーが存在する場合は、名前とメールアドレスを表示します。

```tsx
{user ? (
  <div>
    <p>Name: {user.name}</p>
    <p>Email: {user.email}</p>
  </div>
) : (
  <p>User not found</p>
)}
```

---

## 起動方法

プロジェクトのルートディレクトリで以下を実行します。

### 依存関係をインストール

```bash
npm install
```

### 開発サーバーを起動

```bash
npm run dev
```

表示されたURLにブラウザからアクセスします。

---

## 確認方法

以下のURLへアクセスして、表示内容を確認します。

### ユーザー1

```text
/user/1
```

```text
Name: Alice
Email: alice@example.com
```

### ユーザー2

```text
/user/2
```

```text
Name: Bob
Email: bob@example.com
```

### 存在しないユーザー

```text
/user/999
```

```text
User not found
```

これにより、**URLパラメータの取得 → データ検索 → 画面表示**というDynamic Routingの基本的な流れを確認できます。
