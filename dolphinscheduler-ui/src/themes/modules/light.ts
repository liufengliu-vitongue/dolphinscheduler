import { type GlobalThemeOverrides } from 'naive-ui'
/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const light: GlobalThemeOverrides = {
  common: {
    bodyColor: '#f1f1f2',
    borderRadius: '30px',
    heightTiny: '28px',
    heightSmall: '36px',
    heightMedium: '48px',
    heightLarge: '56px',
    heightHuge: '64px',

    /**************** Brand color */
    primaryColor: '#471c56',
    primaryColorHover: '#563386',
    primaryColorPressed: '#492286',
    primaryColorSuppl: '#1890ff',

    /**************** Function of color */
    infoColor: '#1890ff',
    successColor: '#52c41a',
    warningColor: '#faad14',
    errorColor: '#ff4d4f'
  }
}

export default light
