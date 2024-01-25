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

const dark: GlobalThemeOverrides = {
  common: {
    bodyColor: '#6b427b',
    baseColor: '#f8f8fc',
    borderRadius: '30px',
    heightTiny: '28px',
    heightSmall: '36px',
    heightMedium: '48px',
    heightLarge: '56px',
    heightHuge: '64px',
    cardColor: 'rgba(27,10,34,0.7)',

    /**************** Brand color */
    primaryColor: '#f986d1',
    primaryColorHover: '#775284',
    primaryColorPressed: '#3c9ae8',
    primaryColorSuppl: '#3a9ae8',

    /**************** Function of color */
    infoColor: '#177ddc',
    successColor: '#49aa19',
    warningColor: '#d89614',
    errorColor: '#a61d24'
  }
}

export default dark
